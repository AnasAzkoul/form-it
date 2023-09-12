import { useState } from 'react'

export const useWidget = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [question, setQuestion] = useState("");

  return ({
    isSaved,
    setIsSaved,
    question,
    setQuestion
  })
}
