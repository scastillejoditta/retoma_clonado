const findQuestionsByCandidate = (candidateData = {}, questionsData = [], questionsOptionsData = [], commentsOptionsData = []) => {
  const options = [...questionsOptionsData]
  let candidate = {...candidateData}
  const questions = [...questionsData]
  const commentsOptions = [...commentsOptionsData]
  const optionsArr = []
  const questionsArr = []
  const commentsArr = []

  commentsOptions.map(comment => {
    if(comment.fields.Opcion === candidate[comment.fields.Name]) {
      const comm = `QN_${comment.fields.Name.replace(/\D/g, "")}_Q`; //transform QN_xxx_Q into QN_xxx_P for score
      commentsArr.push({
        ...comment.fields,
        Name: comm
      })
    }

    candidate = {
      ...candidate,
      comments: [...commentsArr]
    }
  }) 

  console.log(commentsArr, 'comments')

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