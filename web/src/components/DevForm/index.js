import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) { //busca propriedade onSubmit dentro do componente
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
    
            setLatitude(latitude)
            setLongitude(longitude)
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000,
          }
        )
    }, [])

    async function handleSubmit(evnt) {
        evnt.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        }) //função recebida como parâmetro, será executada

        setGithubUsername('')
        setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={evnt => setGithubUsername(evnt.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={evnt => setTechs(evnt.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={evnt => setLatitude(evnt.target.value)} //alterando valor de input pelo react com State 
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={evnt => setLongitude(evnt.target.value)}
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    )
}

export default DevForm