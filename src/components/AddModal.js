import * as React from 'react';
import AddModal from '../views/ModalContent'

const AddModalComponents = ({ ...props }) => {

  return (
    <div>
      <AddModal {...props} />
    </div>
  );
}

export default AddModalComponents