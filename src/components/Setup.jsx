'use client'
import { Container } from '@/components/Container'


export function Setup() {
  return (
    <section
      id="setup"
      aria-label="How to setup LatenSee"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            LatenSee is easy to get running.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Two simple steps and LatenSee is ready to keep your functions warm.
          </p>
        </div>
        
      </Container>
    </section>
  )
}
