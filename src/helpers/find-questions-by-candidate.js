const findQuestionsByCandidate = (candidateData = {}, questionsData = [], questionsOptionsData = []) => {
  const options = [...questionsOptionsData]
  let candidate = {...candidateData}
  const questions = [...questionsData]
  const optionsArr = []
  const questionsArr = []

  options.map(opt => {
    if(opt.fields.Opcion === candidate[opt.fields.Name]) {
      optionsArr.push(opt.fields)
    }

    candidate = {
      ...candidate,
      answers: [...optionsArr]
    }
  }) 

  questions
    .map(q => {
      let objFound = candidate?.answers?.find(ca => ca.Name === q.fields.Name)

     // const comment = `QN_${q?.replace(/\D/g, "")}_C`; //transform QN_xxx_Q into QN_xxx_P for score

      if(JSON.stringify(q.fields) === "{}") return

      objFound = {
        ...objFound,
        question: q.fields.Pregunta,
        axle_id: q.fields['Ejes'][0],
      }

      if(objFound.Name) {
        questionsArr.push(objFound)
      }

      candidate = {
        ...candidate,
        questions: [...questionsArr]
      }
    })
  return candidate
}

export {findQuestionsByCandidate}