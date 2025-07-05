/**
 * QueryCoursesByCourseGroupMessage
 * desc: 查询课程组特定课程信息的功能
 * @param userToken: String (用户认证的token，用于验证权限。)
 * @param courseGroupID: Int (课程组ID，用于定位需要查询的课程组)
 * @return queriedCourses: CourseInfo (根据课程组ID查询到的所有课程信息列表)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCoursesByCourseGroupMessage extends TongWenMessage {
    constructor(
        public  userToken: string,
        public  courseGroupID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

