import classes from './TaskItem.module.css';

const TaskItem = ({ description, bookmark }) => {
  return (
    <div>
      <p>{description}</p>
      <button className={classes.button + bookmark ? 'bookmark' : 'unbookmark'} style={{width: '20px'}}/>
    </div>
  );
};
export default TaskItem;
