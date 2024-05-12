import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 500px;
  }

  .modal-content {
    padding: 16px;
    border-radius: 32px;
  }

  .modal-header {
    border: 0;
    padding-bottom: 0;
  }

  .modal-body {
    border: 0;
  }

  .modal-footer {
    border: 0;
    padding-top: 0;
  }
`;
