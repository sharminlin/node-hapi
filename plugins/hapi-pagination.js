const hapiPagination = require('hapi-pagination');

module.exports = {
  register: hapiPagination,
  options: {
    query: {
      page: {
        name: 'page',
        default: 1,
      },
      limit: {
        name: 'limit',
        default: 25,
      },
      pagination: {
        name: 'pagination',
        default: true,
      },
      invalid: 'defaults',
    },
    meta: {
      name: 'meta',
      count: {
        active: true,
        name: 'count',
      },
      totalCount: {
        active: true,
        name: 'totalCount',
      },
      pageCount: {
        active: true,
        name: 'pageCount',
      },
      self: {
        active: true,
        name: 'self',
      },
      previous: {
        active: true,
        name: 'previous',
      },
      next: {
        active: true,
        name: 'next',
      },
      first: {
        active: true,
        name: 'first',
      },
      last: {
        active: true,
        name: 'last',
      },
      page: {
        active: false,
        // name == default.query.page.name
      },
      limit: {
        active: false,
        // name == default.query.limit.name
      },
    },
    results: {
      name: 'results'
    },
    reply: {
      paginate: 'paginate'
    },
    routes: {
      include: [
        '/shops',  // 店铺列表支持分页特性
        '/shops/{shopId}/goods'
      ],
      exclude: []
    }
  },
}
