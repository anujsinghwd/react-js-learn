# react-js-learn
## DOM
- Document Object Model
- abstraction of a structured text

|HTML  | DOM  |
|--|--|
| Elements | Nodes |
| text | In memory represtation of text |

#### Methods
1. getElementById
2. RemoveChild
- `Document` - abstraction of root node
- `getElementById`, `removeChild` - Methods of DOM

## Why use virtual DOM instead of real DOM
- HTML DOM is always tree structural
- Traversing is easy but not so fast
- since, `SPA` (Single Page Application) , there is need to modify DOM a lot

### 2-Problems
1. Hard to Manage
2. It's inefficient

#### Virtual DOM
- abstraction of HTML DOM
- lightweight
- Virtual DOM is an abstraction of abstraction
