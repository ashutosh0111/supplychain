import { useState } from "react";

function useAddEntity(contractMethod) {
  const [account, setAccount] = useState("");
  const [entityInfo, setEntityInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function addEntity() {
    if (!account) {
      setError("Please enter an account address");
      return;
    }

    try {
      setError(null);
      setLoading(true);

      // Call the specified contract method
      await contractMethod(account);

      setSuccess(true);
      setAccount("");
      setEntityInfo("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    account,
    setAccount,
    entityInfo,
    setEntityInfo,
    loading,
    error,
    success,
    addEntity,
  };
}

export default useAddEntity;
