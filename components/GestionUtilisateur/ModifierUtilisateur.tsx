import { NewUser, User, new_user0 } from '@/code/Type'
// import { useAjouterUserMutation } from '@/services/gestionUtilisateurApi'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'

export type ModifierUtilisateurProps = {
  user:User
}
const ModifierUtilisateur = ({user}:ModifierUtilisateurProps) => {
  const [modalShow, setModalShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<User>()
  useEffect(()=> {
    setValue('id',user.id )
    setValue('firstname',user.firstname)
    setValue('lastname',user.lastname ) 
    setValue('email',user.email )
    setValue('role',user.role )
    setValue('password','')

    })
  const onSubmit: SubmitHandler<User> = (data) => {
    // setNewUser(data)
    // reset({
    //   ...new_user0
    // })
    // setModalShow(false)
  }

  return (
    <>
        <Button className="btn-sm  app-btn-secondary"  onClick={()=>setModalShow(true)}>
            Modifier
        </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <i className="bi bi-person-plus-fill mx-2"></i>
            Modifier Utilisateur
          </Modal.Title>
        </Modal.Header>
        <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="app-card-body">
              <div className="mb-3">
                <h6 className="app-card-title">
                  <label htmlFor="setting-input-1" className="form-label">
                    Firstname
                  </label>
                </h6>
                <input
                  type="text"
                  className="form-control"
                  {...register('firstname')}
                  id="setting-input-1"
                  placeholder="Lorem Ipsum Ltd."
                  value={user.firstname}
                  required
                />
              </div>
              <div className="mb-3">
                <h6 className="app-card-title">
                  <label htmlFor="setting-input-2" className="form-label">
                    Lastname
                  </label>
                </h6>
                <input
                  type="text"
                  className="form-control"
                  {...register('lastname')}
                  value={user.firstname}
                  id="setting-input-2"
                  placeholder="Steve Doe"
                  required
                />
              </div>
              <div className="mb-3">
                <h6 className="app-card-title">
                  <label
                    htmlFor="setting-input-3"
                    className="form-label app-card-title"
                  >
                    Email
                  </label>
                </h6>
                <input
                  type="email"
                  className="form-control"
                  {...register('email')}
                  id="setting-input-3"
                  placeholder="hello@companywebsite.com"
                />
              </div>
              <div className="mb-3">
                <h6 className="app-card-title">
                  <label htmlFor="setting-input-1" className="form-label">
                    Role
                  </label>
                </h6>
                <select className="form-control"
                  {...register('firstname')}
                  id="setting-input-1" >
                    <option>User</option>
                    <option >Manager</option>
                    <option >Simoha</option>
                    <option >I see you</option>
                  </select>
              </div>
              <div className="mb-3 ">
                <h6 className="app-card-title">
                  <label htmlFor="setting-input-4" className="form-label ">
                    Nouvelle Password
                  </label>
                </h6>

                <input
                  type="password"
                  {...register('password')}
                  className="form-control"
                  id="setting-input-4"
                  placeholder=""
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="app-btn-secondary"
              onClick={() => setModalShow(false)}
            >
              Close
            </Button>
            <Button type="submit" className="btn app-btn-primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default ModifierUtilisateur
