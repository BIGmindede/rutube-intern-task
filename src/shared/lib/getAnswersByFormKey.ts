import { getAllAnswers } from "./getAllAnswers"

type Answer = Array<{
    questionID: number,
    responseID: number | null
}>

export const getAnswersByFormKey = (formKey?: string): Answer => {
    const allAnswers = getAllAnswers()
    const answers = allAnswers[formKey ?? ""] ?? []
    return answers
}