import { getAnswersByFormKey } from "shared/lib/getAnswersByFormKey";
import { AppDispatch } from "..";
import { undisable } from "../slices/formButtonSlice";

export const checkRequiredAnswers = (formKey?: string) => (dispatch: AppDispatch) => {
    if (!formKey) {
        dispatch(undisable())
        return
    } 

    const answers = getAnswersByFormKey(formKey)
    const requiredQuestions: Array<number> = JSON.parse(
        localStorage.getItem("requiredQuestions") ?? '[]'
    )

    if (requiredQuestions.length === 0) {
        return
    }

    while (requiredQuestions.length > 0) {
        let flag = false
        for (const answer of answers) {
            if (answer.questionID === requiredQuestions[0]) {
                flag = true
                requiredQuestions.shift()
                break
            }
        }
        if (!flag) {
            break
        }
    }

    if (requiredQuestions.length === 0) {
        dispatch(undisable())
    }
}
