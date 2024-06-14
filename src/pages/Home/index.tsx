import { Play } from 'phosphor-react'
import { CountdownContainer, CountdownSeparator, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durant</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <CountdownSeparator>:</CountdownSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
