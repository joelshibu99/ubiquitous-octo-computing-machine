import React, { useState } from 'react'

function ErrorMessage() {
  const [hasError, setHasError] = useState(false)

  return (
    <div>
      {hasError && <p>Incorrect email or password.</p>}

      <button onClick={() => setHasError(true)}>Trigger Error</button>
    </div>
  )
}

export default ErrorMessage