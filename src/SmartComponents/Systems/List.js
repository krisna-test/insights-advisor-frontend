import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import React, { Suspense, lazy } from 'react';

import Loading from '../../PresentationalComponents/Loading/Loading';
import messages from '../../Messages';
import { useIntl } from 'react-intl';

const SystemsTable = lazy(() =>
  import(
    /* webpackChunkName: "SystemsTable" */ '../../PresentationalComponents/SystemsTable/SystemsTable'
  )
);

const List = () => {
  const intl = useIntl();

  document.title = intl.formatMessage(messages.documentTitle, {
    subnav: messages.systems.defaultMessage,
  });

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle
          title={`${intl.formatMessage(messages.insightsHeader)} ${intl
            .formatMessage(messages.systems)
            .toLowerCase()}`}
        />
      </PageHeader>
      <section className="pf-l-page__main-section pf-c-page__main-section">
        <Suspense fallback={<Loading />}>
          <SystemsTable />
        </Suspense>
      </section>
    </React.Fragment>
  );
};

List.displayName = 'systems-list';

export default List;
