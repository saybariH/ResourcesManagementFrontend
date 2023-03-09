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
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
    </Button> */}
      {/* <div
        className="col-auto app-btn-primary rounded border border-grey"
        onClick={() => setModalShow(true)}
      >
        <a className="btn text-white" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-plus-fill mx-1"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          Ajouter Utilisateur
        </a>
      </div> */}
        <Button className="btn-sm  text-white"  onClick={()=>setModalShow(true)}>
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
