import Realm from 'realm';
import RepositorySchema from '../Schemas/RepositorySchema';

export default function getRealm() {
  return Realm.open({schema: [RepositorySchema]});
}
