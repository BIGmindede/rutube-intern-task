type AnswersInLocalStorage = Record<
    string,
    Array<{
        questionID: number,
        responseID: number | null
    }>
>

export const getAllAnswers = (): AnswersInLocalStorage => {
    const data: string = localStorage.getItem("answers") ?? '{}'
    return JSON.parse(data)
}