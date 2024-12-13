'use strict';

const pagination = require('hexo-pagination');

module.exports = function(locals) {
  const config = this.config;
  const perPage = config.category_generator.per_page;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.category_generator.order_by || '-date';

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result;

    const posts = category.posts.sort(orderBy);
    const data = pagination(category.path, posts, {
      perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      explicitPaging: (config.category_generator.explicit_paging || config.category_generator.overwrite_latest || false),
      data: {
        category: category.name
      }
    });

    if ((config.category_generator.overwrite_latest || false) && data.length > 0) {
      const lastPage = data[data.length - 1];
      lastPage.path = lastPage.path.replace(/\/page\/\d+\/?$/, '/latest/');
    }

    if (config.category_generator.verbose || false) {
      data.forEach(page => {
        console.log(`Generated category route: ${page.path}`);
      });
    }

    return result.concat(data);
  }, []);
};
