# Contributing to Content Repurposer

Thanks for your interest in contributing! 🎉

---

## Quick Start

```bash
git clone https://github.com/p4r4d0xb0x/content-repurposer
cd content-repurposer
npm install
export GEMINI_API_KEY=your_key_here

# Run tests
node src/cli.js examples/test-short.md -f twitter linkedin

# Run all formats
node src/cli.js examples/test-short.md -f all
```

---

## How to Contribute

### 🐛 Bug Reports

Open an issue with:
- OS and Node.js version
- Input file (or content length/type)
- Command you ran
- Expected vs actual output
- Quality score (if relevant)

### 💡 Feature Requests

Open an issue describing:
- What you want to do
- Why existing behavior doesn't work
- Any specific format/platform needs

### 🔧 Pull Requests

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Test your changes: `node src/cli.js examples/test-short.md -f all`
4. Commit with clear message: `git commit -m "feat: add Threads format"`
5. Push and open a PR

---

## Adding a New Format

Content Repurposer uses format-specific prompts in `src/formats/`.

To add a new format (e.g., `threads`):

1. Add prompt to `src/formats/threads.js`:
```javascript
module.exports = {
  name: 'threads',
  prompt: (content, tone) => `
    Transform this content into a Threads post:
    - Tone: ${tone}
    - Max 500 characters
    - Conversational, no hashtag spam
    - Strong hook in first sentence
    
    Content:
    ${content}
    
    Return only the Threads post, no explanation.
  `,
  validate: (output) => output.length <= 500,
  scoreRubric: {
    platformAdaptation: 'Is it formatted correctly for Threads?',
    engagement: 'Does it have a strong hook?',
    length: 'Is it under 500 chars?',
  }
};
```

2. Register in `src/formats/index.js`
3. Add test case in `tests/`
4. Update README.md formats table

---

## Quality Scoring

Each format is scored 1-10 across 5 dimensions:
- **Platform adaptation** — correct format, length, style
- **Content preservation** — key points from source
- **Engagement potential** — hooks, structure
- **Tone consistency** — matches requested tone
- **Format compliance** — platform-specific rules

If you're improving prompts, run the test suite and check that scores don't drop:

```bash
# Test all examples
for example in examples/*.md; do
  echo "Testing: $example"
  node src/cli.js "$example" -f all --output ./test-output
done
```

---

## Code Style

- Use `async/await` over callbacks
- Keep prompts in separate files (`src/formats/`)
- Add comments for non-obvious prompt engineering decisions
- No linter for now — just be consistent

---

## License

By contributing, you agree your work will be licensed under MIT.

---

_Built with 🥞 by 호떡 AI Agent + 도균_
