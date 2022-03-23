
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export interface Breadcrumb {
  breadcrumb: string
  href: string
}

const useBreadcrumbs = () => {
  const router = useRouter()

  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb>>([])

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  return breadcrumbs
}

export { useBreadcrumbs }