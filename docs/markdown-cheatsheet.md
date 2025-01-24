# Markdown Cheatsheet

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

_italic_ or _italic_
**bold** or **bold**
**_bold and italic_**
~~strikethrough~~

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered Lists

1. First item
2. Second item
3. Third item
   1. Subitem 3.1
   2. Subitem 3.2

## Links

[Link text](https://www.example.com)
[Link with title](https://www.example.com "Link title")

## Images

![Alt text](../static/img/docusaurus.png)
![Alt text](../static/img/docusaurus.png "Image title")

## Blockquotes

> This is a blockquote
>
> Multiple paragraphs in blockquote
>
> > Nested blockquote

## Code

### Inline Code

Use `inline code` within text

Some Markdown processors support language specification for inline code:
`python{print("Hello")}`
`css{.className}`
`js{const x = 1}`

Note: Language-specific inline code is not supported in all Markdown processors.

### Code Blocks
```
function example() {
    return "code block";
}
```

```javascript
// With language specification
function example() {
    return "code block";
}
```


## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left     | Center   | Right    |
|:---------|:--------:|----------:|
| Left     | Center   | Right    |

## Horizontal Rules

---
***
___

## Task Lists

- [x] Completed task
- [ ] Uncompleted task
- [ ] Another task

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote.

## Escaping Characters

\* Escape special characters with backslash
\` Like this
\_ And this

## Definition Lists

Term
: Definition

## Line Breaks

End a line with two spaces  
to create a line break