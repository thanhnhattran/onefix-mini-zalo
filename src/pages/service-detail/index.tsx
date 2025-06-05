import Tabs from '@/components/tabs';
import { serviceState } from '@/state';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import NotFound from '../404';
import { useState } from 'react';
import Consultation from './consultation';
import DoctorSelector from '@/components/form/doctor-selector';
import FabForm from '@/components/form/fab-form';
import { Doctor } from '@/types';
import { Icon } from 'zmp-ui';

function ServiceDetailPage() {
  const { id } = useParams();
  const service = useAtomValue(serviceState(id!));
  const [activeTab, setActiveTab] = useState(0);

  if (!service) {
    return <NotFound />;
  }

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={[
        {
          name: 'Giới thiệu',
          content: () => <div dangerouslySetInnerHTML={{ __html: service.description }} />,
        },
        {
          name: 'Bác sĩ',
          content: () => (
            <FabForm
              fab={[
                {
                  label: (
                    <span className="space-x-2 flex items-center">
                      <span>Chat với bác sĩ</span>
                      <Icon icon="zi-chat" />
                    </span>
                  ),
                },
                {
                  label: 'Đặt lịch khám',
                },
              ]}
            >
              <DoctorSelector
                onChange={function (value: Doctor): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </FabForm>
          ),
        },
        {
          name: 'Tư vấn',
          content: Consultation,
        },
      ]}
    />
  );
}

export default ServiceDetailPage;
