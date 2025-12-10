import { Link } from "react-router-dom";

function UserCreatePage() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Dashboard</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Morvin</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
              <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                <Link to="/dashboard/user-create">
                  <button className="btn btn-outline-warning me-2">Nouveau</button>
                </Link>
                <Link to="/dashboard">
                  <button className="btn btn-outline-danger me-2">Lister</button>
                </Link>
                <button className="btn btn-outline-success">Rechercher</button>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}

        <div className="container-fluid">
          <div className="page-content-wrapper mb-5 pb-3">
            {/* Contenu dynamique */}

            <div className="row">
              {" "}
              <div className="col-lg-12">
                {" "}
                <div className="card">
                  {" "}
                  <form className="needs-validation">
                    <div className="card-body">
                      {" "}
                      <h4 className="header-title">
                        {" "}
                        Bootstrap Validation - Normal{" "}
                      </h4>{" "}
                      <p className="card-title-desc">
                        Exemple de formulaire en une colonne avec plusieurs
                        types de champs.
                      </p>
                      {/* Texte simple */}
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Nom complet (text)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Nom complet"
                          required
                        />
                      </div>
                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email (email)
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email@exemple.com"
                          required
                        />
                      </div>
                      {/* Mot de passe */}
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Mot de passe (password)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Mot de passe"
                          required
                        />
                      </div>
                      {/* Téléphone */}
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Téléphone (tel)
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Ex: +225 01 23 45 67"
                        />
                      </div>
                      {/* Nombre */}
                      <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                          Âge (number)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="age"
                          min={0}
                          max={120}
                        />
                      </div>
                      {/* Date */}
                      <div className="mb-3">
                        <label htmlFor="birthdate" className="form-label">
                          Date de naissance (date)
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="birthdate"
                        />
                      </div>
                      {/* Fichier */}
                      <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">
                          Avatar (file)
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="avatar"
                        />
                      </div>
                      {/* Radio */}
                      <div className="mb-3">
                        <label className="form-label d-block">
                          Genre (radio)
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderMale"
                            value="male"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderMale"
                          >
                            Homme
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderFemale"
                            value="female"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderFemale"
                          >
                            Femme
                          </label>
                        </div>
                      </div>
                      {/* Select */}
                      <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                          Rôle (select)
                        </label>
                        <select className="form-select" id="role">
                          <option value="">Choisir...</option>
                          <option value="admin">Administrateur</option>
                          <option value="user">Utilisateur</option>
                          <option value="guest">Invité</option>
                        </select>
                      </div>
                      {/* Textarea */}
                      <div className="mb-3">
                        <label htmlFor="bio" className="form-label">
                          Biographie (textarea)
                        </label>
                        <textarea
                          className="form-control"
                          id="bio"
                          rows={3}
                          placeholder="Quelques mots sur l'utilisateur"
                        ></textarea>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="isActive"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="isActive">
                          Utilisateur actif (checkbox)
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className="text-end pt-2 pb-4 pe-5">
                      <button className="btn btn-secondary me-4" type="submit">
                        Reinitialiser
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Valider
                      </button>
                    </div>
                  </form>
                </div>{" "}
              </div>{" "}
            </div>

            <div className="now">
              <div className="card">
                <form>
                  <div className="card-body">
                    <h4 className="header-title">
                      Formulaire en deux colonnes
                    </h4>

                    {/* Ligne 1 : text + email */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="twoColFullName"
                            className="form-label"
                          >
                            Nom complet (text)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="twoColFullName"
                            placeholder="Nom complet"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="twoColEmail" className="form-label">
                            Email (email)
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="twoColEmail"
                            placeholder="email@exemple.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Ligne 2 : password + téléphone */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="twoColPassword"
                            className="form-label"
                          >
                            Mot de passe (password)
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="twoColPassword"
                            placeholder="Mot de passe"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="twoColPhone" className="form-label">
                            Téléphone (tel)
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="twoColPhone"
                            placeholder="Ex: +225 01 23 45 67"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Ligne 3 : âge + date */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="twoColAge" className="form-label">
                            Âge (number)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="twoColAge"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="twoColBirthdate"
                            className="form-label"
                          >
                            Date de naissance (date)
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="twoColBirthdate"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Ligne 4 : rôle + actif */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="twoColRole" className="form-label">
                            Rôle (select)
                          </label>
                          <select className="form-select" id="twoColRole">
                            <option value="">Choisir...</option>
                            <option value="admin">Administrateur</option>
                            <option value="user">Utilisateur</option>
                            <option value="guest">Invité</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="form-check mt-3 mt-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="twoColIsActive"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="twoColIsActive"
                          >
                            Utilisateur actif (checkbox)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="text-end pt-2 pb-4 pe-5">
                    <button className="btn btn-secondary me-4" type="submit">
                      Reinitialiser
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="now mt-4  ">
              <div className="card">
                <form>
                  <div className="card-body">
                    <h4 className="header-title">
                      Formulaire en trois colonnes
                    </h4>

                    {/* Ligne 1 : trois textes */}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="threeColFullName"
                            className="form-label"
                          >
                            Nom complet (text)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="threeColFullName"
                            placeholder="Nom complet"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="threeColEmail" className="form-label">
                            Email (email)
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="threeColEmail"
                            placeholder="email@exemple.com"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="threeColPassword"
                            className="form-label"
                          >
                            Mot de passe (password)
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="threeColPassword"
                            placeholder="Mot de passe"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Ligne 2 : téléphone + âge + date */}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="threeColPhone" className="form-label">
                            Téléphone (tel)
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="threeColPhone"
                            placeholder="Ex: +225 01 23 45 67"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="threeColAge" className="form-label">
                            Âge (number)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="threeColAge"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="threeColBirthdate"
                            className="form-label"
                          >
                            Date de naissance (date)
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="threeColBirthdate"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Ligne 3 : rôle + fichier + actif */}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="threeColRole" className="form-label">
                            Rôle (select)
                          </label>
                          <select className="form-select" id="threeColRole">
                            <option value="">Choisir...</option>
                            <option value="admin">Administrateur</option>
                            <option value="user">Utilisateur</option>
                            <option value="guest">Invité</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="threeColAvatar"
                            className="form-label"
                          >
                            Avatar (file)
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="threeColAvatar"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-items-center">
                        <div className="form-check mt-3 mt-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="threeColIsActive"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="threeColIsActive"
                          >
                            Utilisateur actif (checkbox)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-end pt-2 pb-4 pe-5">
                    <button className="btn btn-secondary me-4" type="submit">
                      Reinitialiser
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreatePage;
