const keywordsAndOperators = {
	open: '<',
	close: '>',
	equals: '=',
	wait: 'wait',
	speed: 'speed'
};

const dialogKeywords = [keywordsAndOperators.wait, keywordsAndOperators.speed];

interface ContentChunk {
	content: string;
	speed: number;
	wait: number;
}

const defaultContentData = () => {
	return {
		[keywordsAndOperators.wait]: 0,
		[keywordsAndOperators.speed]: 5
	};
};

export function parseDialogContent(content: string): ContentChunk[] {
	const chunks: ContentChunk[] = [];

	let textContent: string = '';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let contentData: any = defaultContentData();

	for (let i = 0; i < content.length; i++) {
		const char = content[i];

		if (char === keywordsAndOperators.open) {
			// Break here and extract the keyword and its data
			chunks.push({
				content: textContent,
				wait: contentData[keywordsAndOperators.wait],
				speed: contentData[keywordsAndOperators.speed]
			});
			contentData = defaultContentData();

			// Start new loop til we reach a closing tag ">"
			// +1 since we want to skip the opening tag
			let index = i + 1;
			let foundClosingTag = false;
			let data = '';
			while (!foundClosingTag) {
				const char2 = content[index];

				data += char2;

				if (dialogKeywords.includes(data)) {
					const { value, parsedIndices } = getKeywordValue(index, content);

					contentData[data] = value;

					index += parsedIndices;
					data = '';
					continue;
				}

				if (char2 === keywordsAndOperators.close) {
					foundClosingTag = true;
				} else {
					index++;
				}
			}

			// Skip all the characters that was parsed
			i += index - i;

			textContent = '';
			continue;
		}

		textContent += char;
	}

	if (textContent.length > 0) {
		chunks.push({
			content: textContent,
			wait: contentData[keywordsAndOperators.wait],
			speed: contentData[keywordsAndOperators.speed]
		});
	}

	return chunks;
}

function getKeywordValue(index: number, str: string) {
	// +2 since we want to skip the operator
	let valueIndex = index + 2;
	let foundClosingTag = false;
	let data = '';
	while (!foundClosingTag) {
		const char = str[valueIndex];
		if (char === keywordsAndOperators.close) {
			foundClosingTag = true;
			return { value: parseInt(data), parsedIndices: valueIndex - index };
		}

		data += char;
		valueIndex++;
	}

	return { value: 0, parsedIndices: 0 };
}
