
# 安装全部依赖
npm install

# 运行开发环境, 默认端口: 9000
npm run start

# 测试环境 打包
npm run test

# 生产环境 打包
npm run build

# 查看report
npm run build --report

# 项目目录结构
```
├── /config/                    # webpack配置文件
│   ├── /dev.env.js             # webpack开发环境全局变量
│   ├── /test.env.js            # webpack测试环境全局变量
│   ├── /prod.env.js            # webpack生产环境全局变量
│   └── /index.js               # webpack通用基础配置
├── /dist/                      # 编译输出的文件夹
├── /docs/                      # 项目文档指南
├── /node_modules/              # 第三方工具库
├── /src/                       # App源码文件夹
│   ├── /common/                # 公共资源，公共样式，脚本以及图片
│   ├── ├── style               # 公共样式（如果有就创建）
│   ├── ├── js                  # 公共脚本（如果有就创建）
│   ├── ├── img                 # 公共图片（如果有就创建）
│   ├── /components/            # React 全局通用UI组件
│   ├── /API/                   # 放置接口地址
│   ├── /routes/                # 页面路由
│   ├── /redux/                 # redux状态管理文件
│   │   ├── stores              # 状态store
│   │   ├── reducers            # 状态reducers
│   │   └── actions             # 状态actions
│   ├── /view/                  # 放置页面组件
│   │   ├── page1               # 具体页面组件
│   │   │   ├── component       # 页面相关的组件
│   │   │   ├── style           # 页面相关的样式
│   │   │   └── img             # 页面相关的图片
│   │   └── .....               # 其他核心页面模块
├── /tools/                     # 工具函数
│   ├── /lib/                   # 第三方库通用库，例如JQ
│   └── ....                    # 其他工具函数
├── /static                     # 静态资源，例如全局公用的图片
├── gitignore                   # git 忽略文件设置
├── package.json                # 配置文件
├── eslintignore                # eslint 忽略文件设置
├── eslintrc.js                 # eslint规则配置文件
└── babelrc                     # babel配置
```



