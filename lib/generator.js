'use strict';

const pagination = require('hexo-pagination');

module.exports = function(locals) {
  const config = this.config;
  const perPage = config.category_generator.per_page;
  const explicitPaging = config.category_generator.explicit_paging || false;
  const renameLast = config.category_generator.rename_last || false;
  const localizedLast = config.category_generator.localized_last || 'last';
  const verbose = config.category_generator.verbose || false;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.category_generator.order_by || '-date';

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result;

    const posts = category.posts.sort(orderBy);
    const data = pagination(category.path, posts, {
      perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      explicitPaging: explicitPaging,
      renameLast: renameLast,
      localizedLast: localizedLast,
      verbose: verbose,
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []);
};
