import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div></div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
