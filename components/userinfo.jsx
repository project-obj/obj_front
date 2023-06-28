import React, { useState } from 'react';
import Spinner from '@/components/svg/Spinner';
import EditModal from './modal/EditModal';
import DeleteModal from './modal/deleteModal';
import EditPen from './svg/EditPen';
import TrashBin from './svg/TrashBin';

const UserInfo = ({
  id,
  name,
  cnt,
  roadAddress,
  userDatas,
  setUserDatas,
  isLoading,
}) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const showEditModal = (e) => {
    e.stopPropagation();
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const showDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  return (
    <>
      <div
        className={`my-2 flex h-[5vh] w-full items-center justify-between overflow-hidden rounded-md bg-white md:justify-start`}
      >
        {name && (
          <>
            <div className="mx-2 font-semibold text-mint-em md:w-1/4">
              {name}
            </div>
            <div className="hidden w-1/3 flex-grow text-gray/80 md:inline-block">
              {roadAddress}
            </div>
            {name !== '북마크를 등록해주세요!' && (
              <div className="flex w-1/6 items-center justify-around">
                <button
                  onClick={showEditModal}
                  className="h-full hover:animate-bounce"
                >
                  <EditPen />
                </button>

                <button
                  className="h-full hover:animate-pulse"
                  onClick={showDeleteModal}
                >
                  <TrashBin />
                </button>
              </div>
            )}
          </>
        )}
        {isLoading && (
          <div className="flex h-full w-full animate-pulse items-center justify-center bg-gradient-to-br from-white via-mint/30 to-mint/50">
            <Spinner />
          </div>
        )}
      </div>
      {editModalVisible && (
        <EditModal id={id} name={name} closeModal={closeEditModal} />
      )}
      {deleteModalVisible && (
        <DeleteModal
          userDatas={userDatas}
          setUserDatas={setUserDatas}
          id={id}
          name={name}
          closeModal={closeDeleteModal}
        />
      )}
    </>
  );
};

export default UserInfo;
