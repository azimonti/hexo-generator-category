# hexo-generator-category

[![Build Status](https://github.com/hexojs/hexo-generator-category/workflows/Tester/badge.svg)](https://github.com/hexojs/hexo-generator-category/actions?query=workflow%3ATester)
[![NPM version](https://badge.fury.io/js/hexo-generator-category.svg)](https://www.npmjs.com/package/hexo-generator-category)
[![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-generator-category.svg)](https://coveralls.io/r/hexojs/hexo-generator-category?branch=master)

Category generator for [Hexo].

## Installation

``` bash
$ npm install hexo-generator-category --save
```

## Options

``` yaml
category_generator:
  per_page: 10
  order_by: -date
  explicit_paging: false
  overwrite_latest: false
  verbose: false
```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)
- **explicit_paging**: Explicit paging. (Number the first page. e.g. `page/1/index.html`)
- **overwrite_latest**: Set the latest page. (`latest/index.html` in place of `page/N/index.html`)
- **verbose**: verbose output. (Output all generated routes)

## License

MIT

[Hexo]: https://hexo.io/
