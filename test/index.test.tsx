import Link from 'next/link'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Breadcrumb, useBreadcrumbs } from '../src'

function TestComponent() {
  const breadcrumbs: Breadcrumb[] = useBreadcrumbs()

  return (<div>
    {breadcrumbs.length >= 1 &&
      breadcrumbs.map((breadcrumb, i) => {

        return (
          <ul>
            <li
              key={i}
            >
              <Link href={breadcrumb.href}>
                <a>
                  {breadcrumb.breadcrumb}
                </a>
              </Link>
            </li>
          </ul>
        )
      })}
  </div>)
}

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TestComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
