<template>
  <div>
    <b-row>
      <b-col md="2" offset-md="10">
        <a href="#">Crear Propietario</a>
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
      owners: []
    };
  },
  created() {
    OwnerService.getAll()
      .then(response => {
        this.owners = response.data;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  },
  methods: {
    detailsOwner(ownerId) {
      console.log(ownerId);
    },
    updateOwner(ownerId) {
      console.log("update", ownerId);
    },
    deleteOwner(ownerId) {
      console.log("delete", ownerId);
    }
  }
};
</script>
