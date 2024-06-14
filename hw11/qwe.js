
//匯入 Application 和 Router 類別
import { Application, Router} from "https://deno.land/x/oak@v12.0.0/mod.ts" // "https://deno.land/x/oak/mod.ts";

// 匯入 oakCors 函式
import { oakCors } from "https://deno.land/x/cors/mod.ts";

// 從 handler.js 檔案中匯入 sqlHandler、fetchHandler 和 uploadHandler 函式
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

// 建立應用程式物件
const app = new Application()

// 建立路由器物件
const router = new Router()

// 設定路由處理相關的東西 細節不太懂
router.post('/fetch', fetchHandler)

router.post('/sqlite', sqlHandler)

// 設定路由處理相關的東西 細節不太懂，看起來是執行 uploadHandler 函式
router.post('/upload', uploadHandler)

// 不清楚
app.use(oakCors());

// 將路由器的路由添加到應用程式中
app.use(router.routes())

// 將路由器的允許方法添加到應用程式
app.use(router.allowedMethods())

// 在控制台顯示伺服器的地址
console.log('Server run at http://127.0.0.1:6789')

// 監聽，接收來自客戶端的請求
await app.listen({ port: 6789 })
