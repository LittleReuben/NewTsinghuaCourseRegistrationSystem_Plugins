/**
 * RollBackToPhase1Service
 * desc: 清空所有选课信息，保留用户与开课信息
 * @param adminToken: String (管理员token)
 * @return true
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class RollBackToPhase1Service extends TongWenMessage {
    constructor(
        public  adminToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10014"
    }
}

