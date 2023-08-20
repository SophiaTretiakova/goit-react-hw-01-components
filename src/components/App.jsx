import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { UsersDataCards, GlobalContainer } from './GlobalStyles.styled';
import { GlobalStyles } from './GlobalStyles.styled';

export const App = () => {
  return (
    <GlobalContainer>
      <UsersDataCards>
        <Profile userData={user} />
        <FriendList friends={friends}></FriendList>
      </UsersDataCards>
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
      <GlobalStyles></GlobalStyles>
    </GlobalContainer>
  );
};
