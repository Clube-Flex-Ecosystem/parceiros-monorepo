'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/components/ui/primitives/breadcrumb';

import { getBreadcrumbTrail } from './protected-navigation';

/* Em telas pequenas só a página atual aparece; os níveis anteriores surgem a partir de `sm`. */
const ProtectedBreadcrumb = () => {
  const pathname = usePathname();
  const trail = getBreadcrumbTrail(pathname);

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;

          return (
            <Fragment key={crumb.href}>
              {index > 0 && <BreadcrumbSeparator className="max-sm:hidden" />}
              <BreadcrumbItem className={isLast ? undefined : 'max-sm:hidden'}>
                {isLast ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { ProtectedBreadcrumb };
