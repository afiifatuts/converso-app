import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>
      <section className="home-section">
        <CompanionCard
        id ="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="science"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id ="124"
        name="Countsy the Number Wizard"
        topic="Derivatuves & Integrals"
        subject="math"
        duration={30}
        color="#e5fd0ff"
        />
        <CompanionCard
        id ="125"
        name="Verba the Vocabulary Builder"
        topic="English Literacture"
        subject="language"
        duration={30}
        color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
        title="Recently completed session"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page