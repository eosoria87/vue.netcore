<template>
  <div>
    <b-row>
      <b-col md="2" offset-md="10">
        <router-link :to="{ name: 'OwnerCreate' }">Create owner</router-link>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Fecha de Nacimiento</th>
                <th>Detalles</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <owner-list-row
                v-for="owner in owners"
                :key="owner.id"
                :owner="owner"
                @details="detailsOwner"
                @update="updateOwner"
                @delete="deleteOwner"
              />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirma tu acción"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide"
    >
      <p class="my-4">
        ¿Estás seguro de que deseas eliminar a este propietario?
      </p>
    </b-modal>

    <b-modal ref="alertModal" :title="alertModalTitle" :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </div>
</template>

<script>
import OwnerService from "../../api-services/owner.service";
import OwnerListRow from "../owner/OwnerListRow";

//import OwnerService from '../api-services/owner.service';

export default {
  name: "OwnerList",
  components: {
    OwnerListRow
  },
  data() {
    return {
      owners: [],
      selectedOwnerId: null,
      alertModalTitle: "",
      alertModalContent: ""
    };
  },
  created() {
    this.fetchOwners();
  },
  methods: {
    detailsOwner(ownerId) {
      this.$router.push({ name: "OwnerDetails", params: { id: ownerId } });
    },
    updateOwner(ownerId) {
      this.$router.push({ name: "OwnerUpdate", params: { id: ownerId } });
    },
    deleteOwner(ownerId) {
      this.selectedOwnerId = ownerId;
      this.$refs.deleteConfirmModal.show();
      console.log(this.selectedOwnerId);
    },
    fetchOwners() {
      OwnerService.getAll().then(response => {
        this.owners = response.data;
      });
    },
    onDeleteConfirm() {
      OwnerService.delete(this.selectedOwnerId)
        .then(() => {
          this.alertModalTitle = "Exitosamente";
          this.alertModalContent = "Propietario de cuenta eliminado con éxito";
          this.$refs.alertModal.show();
          this.fetchOwners();
        })
        .catch(error => {
          this.alertModalTitle = "Error";
          this.alertModalContent = error.response.data;
          this.$refs.alertModal.show();
        });
    },
    onDeleteModalHide() {
      this.selectedOwnerId = null;
    }
  }
};
</script>
