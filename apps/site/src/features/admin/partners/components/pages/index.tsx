import { Plus } from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/shared/components/ui/page-header';
import { Button } from '@/shared/components/ui/primitives/button';

const AdminPartnersPage = () => {
  return (
    <PageHeader
      title="Parceiros"
      description="Cadastre, edite e controle a publicação dos parceiros do catálogo."
    >
      <Button asChild>
        <Link href="/admin/partners/new">
          <Plus />
          Novo parceiro
        </Link>
      </Button>
    </PageHeader>
  );
};

export { AdminPartnersPage };
