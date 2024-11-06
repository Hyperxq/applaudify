import { useFormContext } from './useFormContext';
import { Card } from '@applaudify/ui-components';

export default function AchievementContainer() {
  const { formData } = useFormContext();

  return (
    <Card {...formData} />
  );
}