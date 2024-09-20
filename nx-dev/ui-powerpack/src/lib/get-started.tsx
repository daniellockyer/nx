import { SectionHeading } from '@nx/nx-dev/ui-common';
import { ReactElement } from 'react';
import { TerminalOutput } from '@nx/nx-dev/ui-fence';
import { PowerpackPricing } from './powerpack-pricing';

export function GetStarted(): ReactElement {
  return (
    <section id="get-started">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h2" variant="title">
            Premium features, <br /> carefully crafted DX
          </SectionHeading>
          <SectionHeading as="p" variant="subtitle" className="text mt-6">
            Expand you capabilities with Nx Powerpack, <br /> a suite of
            advanced tools designed for enterprises.
          </SectionHeading>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl space-y-12">
          <svg
            className="absolute left-0 top-0 -z-10 -ml-20 hidden -translate-x-full -translate-y-1/2 transform lg:block"
            width={200}
            height={400}
            fill="none"
            viewBox="0 0 200 400"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-slate-100 dark:text-slate-800/60"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={200}
              height={400}
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <svg
            className="absolute bottom-0 right-0 -z-10 -mr-20 hidden translate-x-full translate-y-1/2 transform lg:block"
            width={200}
            height={400}
            fill="none"
            viewBox="0 0 200 400"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-slate-100 dark:text-slate-800/60"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={200}
              height={400}
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="space-y-6 lg:space-y-12">
            <div className="flex items-start gap-6">
              <div className="relative flex size-10 place-items-center rounded-full p-4 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800/60">
                <span className="text-lg text-slate-900 dark:text-slate-100">
                  1
                </span>
              </div>
              <div>
                <h4 className="relative text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                  Buy an Nx Powerpack license
                </h4>
                <p className="mt-2">
                  Select which type of license to subscribe to for your own
                  needs with monthly payments or pay once for the whole year.
                </p>
                <div className="mx-auto mt-4 max-w-md">
                  <PowerpackPricing />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="relative flex size-10 place-items-center rounded-full p-4 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800/60">
                <span className="text-lg text-slate-900 dark:text-slate-100">
                  2
                </span>
              </div>
              <div>
                <h4 className="relative text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                  Activate Nx Powerpack right from your terminal
                </h4>
                <p className="mt-2">
                  The setup is simple and straightforward. Run one command to
                  activate your license and start adding unique capabilities to
                  your workspace.
                </p>
                <div className="mt-4">
                  <TerminalOutput
                    command="nx activate-powerpack {YOUR_LICENSE_KEY}"
                    path="~/my-workspace"
                    title=""
                    content=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="relative flex size-10 place-items-center rounded-full p-4 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800/60">
                <span className="text-lg text-slate-900 dark:text-slate-100">
                  3
                </span>
              </div>
              <div>
                <h4 className="relative text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                  Enjoy your enhanced setup
                </h4>
                <p className="mt-2">
                  Use Nx Powerpack to enhance your development experience with
                  custom remote caching, Conformance, Workspace wide code
                  ownership and more premium official Nx Plugins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
