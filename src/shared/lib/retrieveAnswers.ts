import { getAllAnswers } from "./getAllAnswers"

export const retrieveAnswers = () => {
    const allAnswers = getAllAnswers()
    Object.keys(allAnswers).forEach(formKey => {
        console.log(formKey, allAnswers[formKey])
    })
}