const ApiKey = process.env.REACT_APP_API_KEY;

export const fetchWord = (word) => 
fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${ApiKey}`)
    .then(async (res) => {
        if(!res.ok) {
            const errorData = await res.json()
            console.log(errorData)
            throw new Error(
                errorData.message ? errorData.message :
                'Invalid word. Please try again.'
            )
        }
        return res.json()
    }
)