document.addEventListener('DOMContentLoaded', (event) => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        // Create a copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';

        // Add the copy functionality
        copyButton.addEventListener('click', () => {
            const text = codeBlock.innerText;
            navigator.clipboard.writeText(text).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });

        // Add the button to the code block's container
        const pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('code-container')) {
            pre.parentNode.insertBefore(copyButton, pre);
        } else {
            pre.insertBefore(copyButton, codeBlock);
        }
    });
});
