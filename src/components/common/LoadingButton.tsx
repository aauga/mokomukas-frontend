import { Button, ButtonProps, Spinner } from "react-bootstrap";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
} & ButtonProps;

export function LoadingButton({
  loading = false,
  children,
  ...buttonProps
}: Props) {
  return (
    <Button {...buttonProps} disabled={buttonProps.disabled || loading}>
      {loading ? (
        <>
          <Spinner size="sm" />
        </>
      ) : (
        children
      )}
    </Button>
  );
}
