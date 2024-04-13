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
          <p className="mt-4 text-lg tracking-tight text-slate-900">
            Two simple steps and LatenSee is ready to keep your functions warm.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row">
          {/* This is the code for the lambda function */}
          <div className="m-5 xl:w-1/2">
            <p className="align-left mb-4 mt-4 text-base tracking-tight text-slate-700">
              1. Add two lines around your lambda function&apos;s declaration.
              These tell your lambda to break when it recognizes LatenSee.
            </p>
            <div className="mockup-code">
              <pre
                data-prefix="+"
                className="w-fit bg-green-400 text-slate-700"
              >
                {/* This hacky whitespace is necessary to get the two additional lines at the correct amount of highlighted characters */}
                <code>
                  let cold=true;
                  {
                    '                                                                                                          '
                  }
                </code>
              </pre>
              <pre data-prefix="">
                <code>export const handler= async (event) ={'> {'}</code>
              </pre>
              <pre
                data-prefix="+"
                className="w-fit bg-green-400 text-slate-700"
              >
                <code>
                  {'  '}if(event.body===&apos;LatenSee&apos;){'{'}const body=
                  {'{'}cold{'}'};cold=false;return{'{'}
                  statusCode:200,body:JSON.stringify(body){'}'};{'}'}cold=false;
                </code>
              </pre>
              <pre data-prefix="">
                <code></code>
              </pre>
              <pre data-prefix="">
                <code>{'  /**'}</code>
              </pre>
              <pre data-prefix="">
                <code>{'   * '}Retain all other Lambda functionality here</code>
              </pre>
              <pre data-prefix="">
                <code>{'   */'}</code>
              </pre>
              <pre data-prefix="">
                <code>
                  {'  '}return {'{'} statusCode: 200, body: JSON.stringify{'('}
                  &apos;Lambda complete&apos;{') }'};
                </code>
              </pre>
              <pre data-prefix="">
                <code>{'};'}</code>
              </pre>
            </div>
          </div>

          {/* This is the code for building LatenSee image */}
          <div className="m-5 xl:w-1/2">
            <p className="align-left mb-4 mt-4 text-base tracking-tight text-slate-700">
              2. Build your LatenSee docker image, and deploy anywhere you host
              your containers.
            </p>
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>npm run build</code>
              </pre>
              <pre data-prefix="2">
                <code>docker build -t latensee-image .</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
