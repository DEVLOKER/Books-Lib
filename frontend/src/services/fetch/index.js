import { addCategorie, fetchCategories, editCategorie, deleteCategorie } from './categorieAnnonce.api'
import { addAnnonce, editAnnonce, findAnnoncesByMembre, findAnnoncesByEtat, findAnnoncesByCategorie, findAnnoncesByTitreOrPrix, uploadAnnonceImage, desactivateAnnonce, activateAnnonce } from './annonce.api'
import { getExpiditeurs, syncMessages, getMessages, sendMessage } from './message.api'
import { addWishList, getFavorisation, getFavorisations, deleteFavorisation } from './favorisation.api'
import { register, login, desactivatePublisher, activatePublisher, getUtilisateur } from './membre.api'
import { evaluateAnnonce, findEvaluation, getEvaluations } from './evaluation.api'
import { reportAnnonce, findSignalisation, getSignalisations, deleteSignalisation } from './signalisation.api'

export const api = {
    addCategorie, fetchCategories, editCategorie, deleteCategorie,
    addAnnonce, editAnnonce, findAnnoncesByMembre, findAnnoncesByEtat, findAnnoncesByCategorie, findAnnoncesByTitreOrPrix, uploadAnnonceImage, desactivateAnnonce, activateAnnonce,
    getExpiditeurs, syncMessages, getMessages, sendMessage,
    addWishList, getFavorisation, getFavorisations, deleteFavorisation,
    register, login, desactivatePublisher, activatePublisher, getUtilisateur,
    evaluateAnnonce, findEvaluation, getEvaluations,
    reportAnnonce, findSignalisation, getSignalisations, deleteSignalisation
}