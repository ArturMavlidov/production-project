import { FC, useEffect, useState } from "react";

import { Button } from "shared/ui";

//  Компонент для тестирования ErrorBoundary
const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={throwError}>Throw error</Button>;
};

export default BugButton;
