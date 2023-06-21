import React from 'react';
import { MoonLoader } from 'react-spinners';
import { Button } from 'components/common';

interface IDeleteConfirmation {
  isPending: boolean;
  onDeleteConfirmClick: () => void;
  closeDeleteModal: () => void;
}

const DeleteConfirmation: React.FC<IDeleteConfirmation> = ({
  isPending,
  onDeleteConfirmClick,
  closeDeleteModal,
}) => {
  return (
    <>
      {isPending ? (
        <MoonLoader color="#2E7758" size="60px" />
      ) : (
        <>
          <h2>Are you shure?</h2>
          <div className="mt-6 flex items-center gap-10">
            <Button onClick={onDeleteConfirmClick}>Delete</Button>
            <Button onClick={closeDeleteModal}>Cancel</Button>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteConfirmation;
